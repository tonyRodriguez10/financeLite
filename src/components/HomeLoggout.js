import React, { useState, Component } from 'react';
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux';
import '../css/homeLoggout.css';

const HomeLoggout = (props) => {
    //const tasks = useSelector(state => state.tasks)
   // console.log(tasks)
    // if (!tasks || !tasks.length || tasks == undefined) {
    //     return <p>No hay tareas</p>
    // }

    return(
        <div className='container'>
             <div className='row borders' style={{color: "orange", fontWeight:"bold",textAlign:"center"}}>
                <h1>Finance lite</h1>
            </div>
            <div className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify", marginTop:"1%"}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae augue laoreet, ullamcorper lorem a, efficitur justo. Maecenas commodo feugiat dui in cursus. Nunc viverra id sapien non dapibus. Pellentesque venenatis imperdiet massa, eget placerat odio. Aenean efficitur enim id odio pharetra placerat. Proin ultricies commodo massa sit amet pellentesque. Proin ullamcorper semper nulla vehicula interdum. Curabitur dictum elit sit amet nibh vestibulum aliquam. Pellentesque tempor rhoncus egestas. Quisque laoreet eget ex ac feugiat. Sed ac lacus eu metus ultricies aliquet id in tellus. Proin nec sem tristique purus tincidunt porta. Nullam ut luctus metus. Integer justo dui, mollis vitae est in, rutrum faucibus ligula. In sit amet pulvinar metus. Morbi consectetur massa nisi, id faucibus lectus ultricies vitae.

Curabitur dictum mauris rhoncus laoreet interdum. Nam in suscipit purus, vel semper tortor. Aenean ligula ante, tincidunt sed leo nec, lacinia maximus magna. Curabitur tempor diam dolor. Donec vitae odio vitae mi vestibulum lobortis. Suspendisse massa dolor, venenatis non ex eu, efficitur tincidunt dui. Nullam efficitur erat urna, et lacinia enim egestas in. Pellentesque tempor nisi eget sapien tempus, a scelerisque felis ullamcorper. Ut non consectetur purus. In sagittis odio faucibus magna fringilla, in tempus sapien bibendum. Phasellus ultrices diam iaculis magna aliquam, eu hendrerit arcu porta. Nulla viverra, mauris ut laoreet volutpat, lorem enim blandit massa, eget volutpat elit nunc et sem. Maecenas auctor placerat elit sed bibendum.

Suspendisse libero elit, malesuada et turpis varius, facilisis tempus mauris. In urna dui, blandit nec tristique facilisis, sagittis id nibh. Nulla sit amet lacus efficitur, auctor ligula ac, viverra risus. Cras imperdiet commodo ligula, nec luctus libero pharetra ac. Donec ex orci, tincidunt id scelerisque consectetur, vehicula vitae est. Morbi ultrices vehicula massa ac eleifend. Duis ut mauris at velit sagittis volutpat sit amet id sem. Integer at orci vel nulla molestie laoreet. Aliquam volutpat augue in scelerisque auctor. Nulla eleifend pellentesque nunc tempor pharetra. Cras cursus rutrum nunc ac mollis..</p>
            </div>

            <div className='row' style={{height:"40rem"}}>
            <div className='col-2'></div>
            <div className='col-8'>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=AqlkZxutIj0'
                    className='react-player'
                    playing
                    width='100%'
                    height='100%'
                    />
            </div>
            <div className='col-2'></div> 
            </div>

            {/* {
                tasks.map(task => <li className='list-group-item' key={task.id}>{task.task}</li>)
            } */}

        </div>
    )

    }

export default HomeLoggout;
