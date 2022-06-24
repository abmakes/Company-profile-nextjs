

export default function Contact() {
  return (
    <form>
      <label htmlFor="email">Want us to contact you?</label><br />
      <input placeholder="Email" type="text"></input>
      <button className="formButton">Join</button>
      <style jsx>{`
            form {
              margin: 20px 0;
              font-size: 12px;
            }
            
            input {
              background: #F2F2F2;  
              border: none;
              padding: 12px;
              border-radius: 12px;
              width: 260px;
            }
      
            .formButton {
              position: relative;
              left: -52px;
              background: #005da3;
              color: #FFFFFF;
              padding: 9px 12px;
              border-radius: 12px;
              border: none;
              margin-top: 1rem;
            }
      `}</style>
    </form>
  )
}