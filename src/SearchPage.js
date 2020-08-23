import React from 'react'
import './SearchPage.css';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">

                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow 
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.watchmojo.com%2Fuploads%2Fblipthumbs%2FMM-Celeb-Top10-Celebs-Wed-Love-to-See-Have-a-YouTube-Channel_U5M9Z1-ALT_480.jpg&f=1&nofb=1"
                channel="kenmaro"
                verified
                subs="64k"
                noOfVideos="35"
                description="You can find awesome programming lessons here!"
            />

            <hr />

            <VideoRow 
            views = "12k"
            subs = "6k"
            description = "check this out.."
            timestamp = "4 hours ago"
            channel = "mine craft channel"
            title = "mine craft crush course"
            image = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fdtl30qw_z4U%2Fmaxresdefault.jpg&f=1&nofb=1"
            />

            <VideoRow 
            views = "1.2M"
            subs = "12k"
            description = "check this out.."
            timestamp = "12 hours ago"
            channel = "mine craft channel"
            title = "mine craft voyage"
            image = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.ytimg.com%2Fvi%2F7zRyhba8bac%2Fmaxresdefault.jpg&f=1&nofb=1"
            />  

            <VideoRow 
            views = "90k"
            subs = "12k"
            description = "check this out.."
            timestamp = "12 hours ago"
            channel = "mine craft channel"
            title = "pokemon with minecraft!!!"
            image = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F5oZ542Yuft0%2Fmaxresdefault.jpg&f=1&nofb=1"
            /> 

            <VideoRow 
            views = "2.3k"
            subs = "12k"
            description = "check this out.."
            timestamp = "1 week ago"
            channel = "mine craft channel"
            title = "MINE CRAFT: ZOMBIES SERVER"
            image = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstaticg.sportskeeda.com%2Feditor%2F2020%2F08%2F7c7be-15979150030564-800.jpg&f=1&nofb=1"
            /> 

            <VideoRow 
            views = "43.3k"
            subs = "12k"
            description = "check this out.."
            timestamp = "2 week ago"
            channel = "mine craft channel"
            title = "Minecraft custom LOGOS"
            image = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FT_HYcQ1WJtM%2Fmaxresdefault.jpg&f=1&nofb=1"
            /> 
        </div>

        
    )
}

export default SearchPage
