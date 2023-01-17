import { useForm } from "react-hook-form";
// // import { useState, useContext, useId } from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useId } from 'react';
import range from '../../utils/functionRange';
import Button from "../../components/Button";
import Form from "../../components/Form"
import { Container } from "./styles";
import { Context } from "../../contexts";

const Dashboard = () => {
    const { values, days } = Context()

    const numbers = range(1, 12)
    
    const createDays = days.map((day, index) => {
        let response = "";

        day === "1" ? 
            response = `Amanhã: ${values[index]}`
        :   response =`Em ${day} dias: ${values[index]}`
        
        return(
            <p>{response}</p>
        );
    });

    return (
    
        <Container>
            <section>
                <Form/>
                <div className="box_values">
                    <div className="values">
                        <div className="box_title">
                            <h3>
                                VOCÊ RECEBERÁ:
                            </h3>
                        </div>
                        {
                            days.length === 0 ?
                                <p></p>
                            :
                                createDays
                        }
                    </div>
                </div>
            </section>
        </Container>
    );
};

export { Dashboard }