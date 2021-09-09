const CircleBtn = ({ title, svg }) => {
    return(
        <>
            <div className="circle">
                 {svg}
            </div>
            <p className="title">{title}</p>
        </> 
    )
    
}

export default CircleBtn;