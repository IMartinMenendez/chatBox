import '../styles/modal.css';
import socketIO from 'socket.io-client';

export default function Modal({isModalVisible, setUser, socket}){

    async function sendName(e){
        e.preventDefault();
        socket.emit('username', e.target[0].value);
        setUser(e.target[0].value);
        e.target.reset();
    }

    return(<>
        {isModalVisible &&
        <div className='modal'>
            <form onSubmit={(e) => sendName(e)}>
            <div className='modal-content'>
                <input className='input-modal' type='text' placeholder="Please enter your name"/>
                <button className='button-modal'>Send</button>
            </div>
            </form>
        </div>}
        </>
    )
}
