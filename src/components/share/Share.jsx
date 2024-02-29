import "./share.css";
import LabelIcon from '@mui/icons-material/Label';
import PermMediaIcon from "@mui/icons-material/PermMedia";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/1.jpeg" className="shareProfileImg" alt="" />
          <input 
            placeholder="What's in your mind Braenwyn?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
            <PermMediaIcon htmlColor="tomato" className="shareIcon" />
            <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
            <LabelIcon htmlColor="blue" className="shareIcon" />
            <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
            <LocationOnIcon htmlColor="green" className="shareIcon" />
            <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
            <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon" />
            <span className="shareOptionText">Feelings</span>
            </div>
            
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
