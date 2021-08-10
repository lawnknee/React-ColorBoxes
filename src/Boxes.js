function Boxes(props) {
    // randomize the boxes
    c
    return (
        {props.colors.map(c => (
            <ColorBox />
        ))}
    )
}


Boxes.defaultProps = {
    colors: ["black", "silver", "grey", "white", 
    "maroon", "red", "purple", "fuschia", "green", "lime", 
    "olive", "yellow", "navy", "blue", "teal", "aqua"]
};