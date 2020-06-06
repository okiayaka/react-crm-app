import React from 'react';

const App = () => {
  const [detas, setDetas] = React.useState([
    {
      name:'satou', age:'25', email:'sat@gmail.com'
    },
    {
      name:'abe', age:'48', email:'hiroshi@yahoo.co.jp'
    },
  ])


  // Formコンポーネント
  const Form = (props) => {
    const handleSubmit = (e) => {

      e.preventDefault()

      const addDetas = props.detas.slice()

      const name = e.target.name.value
      const age = e.target.age.value
      const ad = e.target.ad.value

      // addDetas.push(name)
      // addDetas.push(age)
      // addDetas.push(ad)

      // addDetas.push(detas)

      // props.setDetas(addDetas)
    }
    return (
      <>
        <form onSubmit={handleSubmit}>
          名前 : <input type="text" name="name" placeholder="お名前を入力"/> <br />
          年齢 : <input type="tel" name="age" maxlength="2" placeholder="年齢を入力"/> <br />
          メール: <input type="email" name="ad" placeholder="e-mailアドレスを入力"/> <br />
          <button type="submit">追加</button>
        </form>
      </>
    )
  }

  const List = (props) => {
    
    // const userDeta = () => {
    // }

    // ＋ボタンが押された時以下の処理を実行
      // const incBtn = () => { 
      //   // 1.props.detas[index].ageの数を取得
      //   const newAge = props.detas[index].age.value
      //   // 2.取得した値に＋１する。
      //   newAge ++
      // }

    // カウントボタン
    // 1.年齢のvalueを取得 <- 値の取得がうまくいっていない
    // 2.+1する
    
      // const incBtn = (props) => { 
      //   const newAge = props.detas[this.index].age.slice()
      //   props.setDetas(newAge++)
      // }


      // const incBtnにpropsは渡せない。（コンポーネント関数ではないから。）
      // const incBtn = (props) => { 
      //   const incAge = props.detas[this.index].age.value
      //   props.setDetas(incAge++)
      // }


      // ----------- 0602-------------
      // // reactでのクリックイベントの渡し方 ----- onClick = { 関数名 }
      const incBtn = () => {
        // 1. 年齢を取得
        // const newAge = props.detas.age.value
        // const newAge = detas.age.value
        // const newAge = detas[this.index].age.value
        // 2. +1 する
        // newAge ++

        // ---------06-04
        // this.setState({value : this.state.value - 1});

        // this.setDeta({value : this.deta.age.value - 1});

        const newAge = this.deta.age.value
        newAge++


      }

      // const [count , setCount] = useState(0);
    

      const decBtn = (props) => { 
        // const newAge = props.detas[this.index].age.slice()
        // props.setDetas(newAge++)
        // this.setDetas({count :this.detas.count -1})
        // props.setDetas({ value: props.detas[this.index].age - 1})
        const newAge = props.detas[this.index].age.value
        props.setDetas(newAge - 1)
        console.log( '-1')
      }


    return (
      // return内はconst書けない
      <>

        {/* <ul><li></li></ul>をコピーする。
        .slice()を使う。
        切り返し処理＝ for? */}
        {/* map = 新しい配列を生成 */}
        {/* detas にindex番号を入れる */}
        {/* 要素のindex番号を取得 */}
        {/* index -> +1 */}

        {/* ＋ボタンが押された時以下の処理を実行
            const incBtn = () => { 
              // 1.props.detas[index].ageの数を取得
              const newAge = props.detas[index].age.value
              // 2.（クリックしたら）取得した値に＋１する。
              newAge ++
        } */}

        
        {/* <ul>をあるだけ表示。detasにはindex番号を反映。 */}

        {
          // mapメソッド
          // 既存の配列.map(処理) => 既存の配列に処理をして返してくれる。
          // ？？.map((deta, index)？？
          props.detas.map((deta, index) => {
            // detaをindex(ここでは[0]と[1])分、新しい配列にして生成。-----という意味？
            return (
              <>
              <ul>
                <li>名前 : {props.detas[index].name}</li>
                <li>年齢 : {props.detas[index].age}</li>
                {/* <li>年齢 : {props.detas[index].age.value}</li> */}
                {/* <li>年齢 : {props.detas[index].age.value + 1}</li> */}

                {/* {props.detas[index].age}の数を取得→1ずつ減らす、増やす処理（関数）。 */}
                {/* <button onClick={decBtn}> - </button>
                <button onClick={incBtn}> + </button> */}

                {/* <button onClick={() => setCount(count + 1)}> - </button> */}


                <button onClick={decBtn}> - </button>
                <button onClick={incBtn}> + </button>

                {/* <button> - </button>
                <button> + </button> */}

                <li>メール : {props.detas[index].email}</li>
              </ul>
              <hr />
              </>
            )
          })
        }

        {/* <ul>
          <li>名前 : {props.detas[0].name}</li>
          <li>年齢 : {props.detas[0].age}</li>

            <button> - </button>
            <button> + </button>

          <li>メール : {props.detas[0].email}</li>
        </ul>

        <ul>
          <li>名前 : {props.detas[1].name}</li>
          <li>年齢 : {props.detas[1].age}</li>

            <button> - </button>
            <button> + </button>

          <li>メール : {props.detas[1].email}</li>
        </ul>  */}


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
      {/* <List detas={detas} index={index} setDetas={setDetas}></List> */}

    </section>
  );
}

export default App
