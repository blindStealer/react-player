import styled from "styled-components";

export const StyledApp = styled.div`
  gap: 10px;
  background-color: antiquewhite;
  height: 950px;
  display: flex;
`

export const StyledWrapper = styled.div`
  display:  flex;
  flex-direction: column;
  gap: 20px;
`

export const StyledPlayerMenu = styled.div`
  display: flex;
  min-width: 600px;
  min-height: 100px;
  flex-direction: column;
  gap: 10px;
  
`

export const StyledAddPanel = styled.div`
    display: flex;
      gap: 10px;
    justify-content: center;
      padding: 10px;
    `

export const StyledPanel = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 600px;

`
export const StyledReactPlayer = styled.div`
    background: wheat;
`

export const StyledMenuItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid white;
  padding: 10px;
`
export const StyledTimeLine = styled.div<ITimeLine>`
  width: 500px;
  height: 15px;
  background-color: lightpink;
  border-radius: 100px;
`

export const StyledLine = styled.div<ITimeLine>`
  border-radius: 100px;
  width: ${(props) => props.width};
  height: 15px;
  background-color: white;
  transition:  ${(props) => props.progressbarSmooth}s linear;

`

interface ITimeLine {
    width?: string
    progressbarSmooth?: number;
}

