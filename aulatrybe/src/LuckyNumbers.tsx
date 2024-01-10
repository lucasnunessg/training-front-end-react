function getLuckyNumber() {
    return Math.floor(Math.random() * 60 + 1);
}
  
  function LuckyNumbers() {
    const show = true;
    return (
      <>
        <h2 className="subtitle">Seus números da sorte da Mega-Sena são:</h2>
        {show ? (
          <ul>
            <li>{getLuckyNumber()}</li>
            <li>{getLuckyNumber()}</li>
            <li>{getLuckyNumber()}</li>
            <li>{getLuckyNumber()}</li>
            <li>{getLuckyNumber()}</li>
            <li>{getLuckyNumber()}</li>
          </ul>
        ) : (
            <h2> Não há números para você</h2>
        )}

        
      </>
    );
  }
  
  export default LuckyNumbers;
  