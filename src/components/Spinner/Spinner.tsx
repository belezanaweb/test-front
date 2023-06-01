import './style.css'
interface SpinnerProps {
  height?: string;
}
export default function Spinner({ height = 'full' }: SpinnerProps) {
  return (
    <div className={`w-full h-${height} flex justify-center items-center`}>
      <div role="alert" aria-busy="true" aria-live="polite" className="spring-spinner">
        <div className="spring-spinner-part top">
          <div className="spring-spinner-rotator"></div>
        </div>
        <div className="spring-spinner-part bottom">
          <div className="spring-spinner-rotator"></div>
        </div>
      </div>
    </div>
  )
}
