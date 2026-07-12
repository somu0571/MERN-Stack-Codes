export default function Activity(userName, textColor) {
    let styles = { color: textColor } // Dynamic Styling
    return (
        <h1 style={styles}>Hello {userName}</h1>
    )
}
