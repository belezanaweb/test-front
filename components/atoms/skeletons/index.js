import styled from 'styled-components';
import Loading from '../loading'
const Skeletons = ({width, height, children}) => {
    //Ia fazer os "skeletos" de loading dos components mas fiquei sem tempo e só coloquei um loading normal.
	return (
		<SkeletonsS style={{width: width, height:height}}><Loading /></SkeletonsS>
    )
}
export default Skeletons

const SkeletonsS = styled.div`
    height: calc(100vh - 42px);
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
 

`