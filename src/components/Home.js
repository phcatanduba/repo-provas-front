import styled from 'styled-components';
import Header from './Header';
import Teachers from './Teachers';
import Subjects from './Subjects';
import Upload from './Upload';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [subjects, setSubjects] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const promiseTeachers = axios.get('http://localhost:4000/teachers');
    const promiseSubjects = axios.get('http://localhost:4000/subjects');

    useEffect(() => {
        promiseSubjects.then((res) => {
            setSubjects(res.data);
        });
    }, []);

    useEffect(() => {
        promiseTeachers.then((res) => {
            setTeachers(res.data);
        });
    }, []);

    return (
        <Main>
            <Header>RepoProvas</Header>
            <Upload options={{ teachers, subjects }} />
            <div>
                <Teachers teachers={teachers} />
                <Subjects subjects={subjects} />
            </div>
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
