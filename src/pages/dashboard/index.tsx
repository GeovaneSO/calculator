import Form from "../../components/Form";
import { Container } from "./styles";
import { Context } from "../../contexts";
import Loading from "../../components/Loading";

const Dashboard = () => {
    const { days, values, loading } = Context();
    
    const advanceValue =  days.map((day, index) => {
        let response = "";
        
        const value = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(values[index])

        const numberDay = Math.round( Number(day))
        
        numberDay === 1 ? 
            response = `Amanhã: ${value}`
        :            
            response =`Em ${numberDay} dias: ${value}`
    
        return(
            <p>{response}</p>
        );
    });
    
    return (
        <>
            { loading && <Loading />}
            <Container>
                <section>
                    <Form/>
                    <div className="box_values">
                        <div className="values">
                            <div className="box_title">
                                <h3>VOCÊ RECEBERÁ:</h3>
                            </div>
                            {
                                days.length === 0 ?
                                    <p></p>
                                :
                                advanceValue
                            }
                        </div>
                    </div>
                </section>
            </Container>
        </>
    );
};

export { Dashboard };