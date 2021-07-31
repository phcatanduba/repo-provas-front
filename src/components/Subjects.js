import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Subjects({ subjects }) {
    return (
        <ul>
            {subjects.map((s) => {
                return <li key={s.id}>{s.name}</li>;
            })}
        </ul>
    );
}
