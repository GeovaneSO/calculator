import { useForm } from "react-hook-form";
// // import { useState, useContext, useId } from 'react';
import Form from "../../components/Form"
import { Container } from "./styles";
import { Context } from "../../contexts";

const Dashboard = () => {
    const { values, days, createDays } = Context()

        console.log(values, days)
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