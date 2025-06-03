import cube1 from '../assets/Cube1.jpg'; 
import cube2 from '../assets/Cube2.jpg'; 
import cube3 from '../assets/Cube3.jpg'; 
import cube4 from '../assets/Cube4.jpg'; 

export default function Cubes() {
  return (
    <div className='cube-wrapper'>
      <div className='cube-card'>
        <img src={cube1} alt="Minecraft" />
        <h5>Minecraft</h5>
        <p>Sandbox Survival, Adventure<br />Single-player + Multiplayer</p>
      </div>

      <div className='cube-card'>
        <img src={cube2} alt="Minecraft Dungeons" />
        <h5>Minecraft Dungeons</h5>
        <p>Dungeon Crawl, Action RPG<br />Single-player + Multiplayer</p>
      </div>

      <div className='cube-card'>
        <img src={cube3} alt="Minecraft Legends" />
        <h5>Minecraft Legends</h5>
        <p>Action RPG, Strategy<br />Single-player + Multiplayer</p>
      </div>

      <div className='cube-card'>
        <img src={cube4} alt="Minecraft Education" />
        <h5>Minecraft Education</h5>
        <p>Education, Sandbox Survival<br />Single-player + Multiplayer</p>
      </div>
    </div>
  );
}
