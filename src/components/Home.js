import styled from 'styled-components';
import Header from './Header';
import Teachers from './Teachers';
import Subjects from './Subjects';
import Upload from './Upload';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SubjectsView from './SubjectsView';
import TeachersView from './TeachersView';

export default function Home() {
    const [subjects, setSubjects] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [exams, setExams] = useState([]);
    const [id, setId] = useState(0);
    const [bool, setBool] = useState(false);
    const promiseTeachers = axios.get('http://localhost:4000/teachers');
    const promiseSubjects = axios.get('http://localhost:4000/subjects');

    useEffect(() => {
        const promise = axios.get('http://localhost:4000/exams/subjects');

        promise.then((res) => {
            setExams(res.data);
        });

        promiseSubjects.then((res) => {
            setSubjects(res.data);
        });

        promiseTeachers.then((res) => {
            setTeachers(res.data);
        });
    }, []);

    return (
        <Main>
            <Header>RepoProvas</Header>
            <Upload options={{ teachers, subjects }} />
            <div>
                <Teachers
                    teachers={teachers}
                    setBool={setBool}
                    exams={exams}
                    setTeachersId={setId}
                />
                <Subjects
                    subjects={subjects}
                    setBool={setBool}
                    exams={exams}
                    setSubjectId={setId}
                />
            </div>
            {bool ? (
                <TeachersView exams={exams} id={id} />
            ) : (
                <SubjectsView exams={exams} id={id} />
            )}
        </Main>
    );
}

const Main = styled.main`
    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
