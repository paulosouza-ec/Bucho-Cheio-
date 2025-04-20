import { Modal,Box } from '@mui/material';
import { Botao } from "../Botao";
import { Logo } from "../../assets";
import './style.css';

export const PopUp = (props) => {
return (
    <div>
      <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
        <Box className='box'>
          <div className="logo">
            <img src={Logo} alt="Logo" width={100} />
          </div>
          <p className='title'>{props.titulo}</p>

          {props.aparecebotaook? <div className='containerBotaoOK'><Botao 
              width={150}
              text='OK'
              backgroundColor='#FF9D01'
              color='#FFFFFF'
              backgroundColorHover='#FFFFFF'
              colorHover='#FF9D01'
              borderHover='2px solid #FF9D01'
              onClick={props.onClickButtonSim}
              border='2px solid #FF9D01'
            />
            </div>
            :<div className='container-buttons'>
            <Botao 
              width={150}
              text='SIM'
              backgroundColor='#FF9D01'
              color='#FFFFFF'
              backgroundColorHover='#FFFFFF'
              colorHover='#FF9D01'
              borderHover='2px solid #FF9D01'
              onClick={props.onClickButtonSim}
              border='2px solid #FF9D01'
            />

            <Botao 
              width={150}
              text='NÃO'
              backgroundColor='#FF9D01'
              color='#FFFFFF'
              backgroundColorHover='#FFFFFF'
              colorHover='#FF9D01'
              borderHover='2px solid #FF9D01'
              onClick={props.onClickButtonNao}
            />
          </div>}
        </Box>
      </Modal>
    </div>
  );
}