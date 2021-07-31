import styled from 'styled-components';

export default function Teachers({ teachers, setBool, exams, setTeachersId }) {
    return (
        <TeachersBox>
            <label htmlFor="teachers">Professores: </label>
            <select
                id="teachers"
                onChange={(e) => {
                    setTeachersId(e.target.value);
                    setBool(true);
                }}
            >
                <option>Selecione uma opção abaixo</option>
                {teachers.map((t) => {
                    return (
                        <option key={t.id} value={t.id}>
                            {t.name} (
                            {
                                exams.filter((e) => {
                                    return e.teachersId === t.id;
                                }).length
                            }{' '}
                            provas)
                        </option>
                    );
                })}
            </select>
        </TeachersBox>
    );
}

const TeachersBox = styled.div`
    label {
        font-size: 24px;
        margin-right: 10px;
    }
    select {
        height: 30px;
        font-size: 20px;
        border-radius: 5px;
    }
`;
