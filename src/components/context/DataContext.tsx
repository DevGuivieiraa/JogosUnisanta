import React, { createContext, useContext, useState, useEffect } from 'react';
import { AVAILABLE_COURSES, mockAthletes as initialAthletes } from '../../data/mockData';

export interface Athlete {
    id: string;
    firstName: string;
    lastName: string;
    institution: string;
    course: string;
    sports: string[];
}

interface DataContextType {
    courses: string[];
    addCourse: (course: string) => void;
    removeCourse: (course: string) => void;
    athletes: Athlete[];
    addAthlete: (athlete: Athlete) => void;
    removeAthlete: (id: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Carregar do localStorage ou usar os mocks iniciais
    const [courses, setCourses] = useState<string[]>(() => {
        const saved = localStorage.getItem('jg_courses');
        if (saved) return JSON.parse(saved);
        return AVAILABLE_COURSES;
    });

    const [athletes, setAthletes] = useState<Athlete[]>(() => {
        const saved = localStorage.getItem('jg_athletes');
        if (saved) return JSON.parse(saved);
        return initialAthletes;
    });

    // Salvar sempre que houver alteração
    useEffect(() => {
        localStorage.setItem('jg_courses', JSON.stringify(courses));
    }, [courses]);

    useEffect(() => {
        localStorage.setItem('jg_athletes', JSON.stringify(athletes));
    }, [athletes]);

    const addCourse = (course: string) => setCourses(prev => [course, ...prev]);
    const removeCourse = (courseToRemove: string) => {
        setCourses(prev => prev.filter(c => c !== courseToRemove));

        // Também removemos atletas que pertencem a esse curso (Regra de Negócio)
        const [courseName] = courseToRemove.split(' - ');
        setAthletes(prev => prev.filter(a => a.course !== courseName));
    };

    const addAthlete = (athlete: Athlete) => setAthletes(prev => [athlete, ...prev]);
    const removeAthlete = (id: string) => setAthletes(prev => prev.filter(a => a.id !== id));

    return (
        <DataContext.Provider value={{
            courses, addCourse, removeCourse,
            athletes, addAthlete, removeAthlete
        }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
