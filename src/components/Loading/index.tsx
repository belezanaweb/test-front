import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
}
