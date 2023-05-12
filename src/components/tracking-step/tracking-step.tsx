import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Steps, Step, StepWrapper } from './tracking-step.styled';

export interface ITrackingStepProps {
    name: string;
    url: string;
}

const stepsList: ITrackingStepProps[] = [
    {
        name: 'Sacola',
        url: '/carrinho',
    },
    {
        name: 'Pagamento',
        url: '/checkout',
    },
    {
        name: 'Confirmação',
        url: '/confirmacao',
    }
];

const TrackingStep = () => {
    const [steps] = useState(stepsList);
    const { pathname } = useLocation();

    return (
        <Container>
            <Steps>
                {steps.map(({ name, url }: ITrackingStepProps) => (
                    <StepWrapper key={name}>
                        <Step className={pathname === url ? 'active' : ''}>{name}</Step>
                    </StepWrapper>
                ))}
            </Steps>
        </Container>
    );
};

export default TrackingStep;
