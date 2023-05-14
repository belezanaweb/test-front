import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Steps, Step, StepWrapper } from './tracking-step.styled';

export interface ITrackingStepProps {
    name: string;
    stepTitle: string;
    urls: string[];
}

const stepsList: ITrackingStepProps[] = [
    {
        name: 'carrinho',
        stepTitle: 'Sacola',
        urls: ['/carrinho', '/'],
    },
    {
        name: 'checkout',
        stepTitle: 'Pagamento',
        urls: ['/checkout'],
    },
    {
        name: 'confirmacao',
        stepTitle: 'Confirmação',
        urls: ['/confirmacao'],
    }
];

const activeStep = (pathname: string, urls: string[]): boolean => {
    return urls.includes(pathname);
};

const TrackingStep = () => {
    const [steps] = useState(stepsList);
    const { pathname } = useLocation();

    return (
        <Container>
            <Steps>
                {steps.map(({ stepTitle, name, urls }: ITrackingStepProps) => (
                    <StepWrapper key={name}>
                        <Step className={activeStep(pathname, urls) ? 'active' : ''}>{stepTitle}</Step>
                    </StepWrapper>
                ))}
            </Steps>
        </Container>
    );
};

export default TrackingStep;
