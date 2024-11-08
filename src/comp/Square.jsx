
const ProjectCard = ({ title, description, className, url }) => {
    function leadUrl(URL) {
        window.location.href = URL
      }
  return (
    <div className={`square sq${className}`} onClick={()=>leadUrl(url)}>
      <h5>{title}</h5>
      <p>{description}</p>
      <div className="icoPort">
        <i className="fa-regular fa-eye"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-solid fa-share-nodes"></i>
      </div>
    </div>
  );
};


export default ProjectCard;
