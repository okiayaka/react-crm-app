import React from 'react';

const App = () => {
  const [detas, setDetas] = React.useState([
    "name",
    "age",
    "e-mail"
  ])

  const Form = (props) => {
    const handleSubmit = (e) => {
      e.preventDefault()

      const newDetas = props.detas.slice()

      const name = e.target.name.value
      const age = e.target.age.value
      const ad = e.target.ad.value

      newDetas.push(name)

      props.setDetas(newDetas)
    }
    return (
      <>
        <form onSubmit={handleSubmit}>
          名前 : <input type="text" name="name" placeholder="お名前を入力"/> <br />
          年齢 : <input type="tel" maxlength="3" placeholder="ご年齢を入力"/> <br />
          メール: <input type="email" placeholder="e-mailアドレスを入力"/> <br />
          <button type="submit">OK</button>
        </form>
      </>
    )
  }
  
  const List = (props) => {
    return (
      <>


      <Btn></Btn>
      </>
    )
  }

  const Btn = (props) => {
    return(
      <>
        <button> - </button>
        <button> + </button>
      </>
    )
  }
  

  return (
    <section>
      {/* データ入力フォーム */}
      {/* <Form></Form> */}
      <Form detas={detas} setDetas={setDetas}></Form>

      {/* 入力されたデータを反映 */}
      {/* <List></List> */}
      <List detas={detas} setDetas={setDetas}></List>

    </section>
  );
}

export default App
