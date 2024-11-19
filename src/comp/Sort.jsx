import { useEffect, useRef } from "react";
import './styles/sort.css'
import Sortable from "sortablejs";
import courseList from '../courseList'
import Course from './Course.jsx'

const TeamMembers = () => {
  const teamMembersRef = useRef(null);

  useEffect(() => {
    if (teamMembersRef.current) {
      new Sortable(teamMembersRef.current, {
        animation: 350,
        chosenClass: "team-member-chosen",
        dragClass: "team-member-drag",
      });
    }
  }, []);


  return (
      <ul id="team-members" ref={teamMembersRef}>
        {courseList.map((item, index)=>(
            <Course ruta={item.filename} nombre={item.name} key={index} />
        )  
        )}
      </ul>
  );
};

export default TeamMembers;
