import styled from "styled-components";

const Loading = () => {
	return (
		<LoadingAnimation className={'loader'}></LoadingAnimation>
	)
}

export default Loading

const LoadingAnimation = styled.span`
&.loader,
&.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
&.loader {

  font-size: 2px;
  position: absolute;
  top:25%;
  right:45%;
  text-indent: -9999em;
  border-top: 1.5em solid rgba(0,0,0, 0.15);
  border-right: 1.5em solid rgba(0,0,0, 0.15);
  border-bottom: 1.5em solid rgba(0,0,0, 0.15);
  border-left: 1.5em solid orangered;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
  background:none;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}



`
