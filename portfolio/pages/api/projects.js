export default (req, res) => {
    res.status(200).json({
        'ticker': {
            name: 'Stock Ticker',
            skills: [ 'React', 'APIs', 'Bootstrap'],
            
        }
    })
}