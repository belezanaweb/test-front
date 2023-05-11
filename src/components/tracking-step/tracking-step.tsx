import { useState } from 'react';
import { Container, Steps, Step, StyledNavLink } from './tracking-step.styled';

export interface ITrackingStepProps {
    name: string;
    url: string;
}

const stepsList: ITrackingStepProps[] = [
    {
        name: 'Sacola',
        url: 'carrinho',
    },
    {
        name: 'Pagamento',
        url: 'checkout',
    },
    {
        name: 'Confirmação',
        url: 'confirmacao',
    }
];

const TrackingStep = () => {
    const [steps] = useState(stepsList);

    return (
        <Container>
            <Steps>
                {steps.map(({ name, url }: ITrackingStepProps) => (
                    <Step key={name}>
                        <StyledNavLink to={`/${url}`}>
                            {name}
                        </StyledNavLink>
                    </Step>
                ))}
            </Steps>
        </Container>
    );
};

export default TrackingStep;
