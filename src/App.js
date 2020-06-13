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
      // デフォルトでurlがリロードされることを防ぐ
      e.preventDefault()
      // ステートをコピーしている。
      const addDetas = props.detas.slice()
        // 追加するユーザーの値を取得する。
        const name = e.target.name.value
        const age = e.target.age.value
        const email = e.target.email.value
        // addDetasに追加するユーザーの値を取得する。←恐らくここでうまくいっていいない。意図した処理と実際の処理に違いを見つける。
        // 実施の処理を明確化する。
        addDetas.push({
          name: name,
          age: age,
          email: email
        })
        // addDetas.push(name)
        // addDetas.push(age)
        // addDetas.push(ad)
        // addDetas.push(detas)

        // 実際の処理を見るために、consoloe.log()を使って行われた処理を確認するとよい。
        //  デバックにはconsole.logを使う
        console.log(addDetas)

        // ステートを更新する。（setDetas）
        props.setDetas(addDetas)




    }
    return (
      <>
        <form onSubmit={handleSubmit}>
          名前 : <input type="text" name="name" placeholder="お名前を入力"/> <br />
          年齢 : <input type="tel" name="age" maxlength="2" placeholder="年齢を入力"/> <br />
          メール: <input type="email" name="email" placeholder="e-mailアドレスを入力"/> <br />
          <button type="submit" onClick={handleAdd}>追加</button>
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
      // const incBtn = () => {
      //   // 1. 年齢を取得
      //   // const newAge = props.detas.age.value
      //   // const newAge = detas.age.value
      //   // const newAge = detas[this.index].age.value
      //   // 2. +1 する
      //   // newAge ++

      //   // ---------06-04
      //   // this.setState({value : this.state.value - 1});

      //   // this.setDeta({value : this.deta.age.value - 1});

      //   const newAge = this.deta.age.value
      //   newAge++
      // }

      // const [count , setCount] = useState(0);
    

      // const decBtn = (props) => { 
      //   // const newAge = props.detas[this.index].age.slice()
      //   // props.setDetas(newAge++)
      //   // this.setDetas({count :this.detas.count -1})
      //   // props.setDetas({ value: props.detas[this.index].age - 1})
      //   const newAge = props.detas[this.index].age.value
      //   props.setDetas(newAge - 1)
      //   console.log( '-1')
      // }


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
            
            // const incBtn = (detas) => {
            //   // const newAge = parseInt(deta.age) + 1
            //   const newAge = parseInt(deta.age)
            //   // console.log(newAge + 1)
            //   // return newAge + 1
            //   console.log(newAge+1)
            //   // newAge.value = newAge + 1
            // }

            const incBtn = (detas) => {
              const newAge = parseInt(deta.age)
              const countUp = () => {
                newAge++
                console.log(newAge)
              }
              countUp()
              // console.log(newAge + 1)
            }


            const decBtn = () => {
              // const newAge = detas.age
              // console.log(newAge)  //undefined
              // console.log(newAge - 1)  //NaN
            }
            
            

            
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


  // ---------form 追加ボタン押した時データ送信----------
  const handleAdd = () => {
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; cherset=utf-8",
      },
      body: JSON.stringify({    //json形式＝オブジェクトっぽく書く？
        // name: addDetas.name,
        // age: addDetas.age,
        // email: addDetas.email

        // name: Form.setDetas
        name: Form.addDetas  // undefinedのデータを受け取りました
      })
    }).then(res => res.json())
      .then(res => {
        console.log(res.msg)
      }).catch(err => console.errer(err))

    console.log(fetch.body)
  }


  // --------------------------------------
  // GETボタンを押した時にサーバーと通信する関数。msgをserverからクライアントに送った。
  const handleGet = () => {
    // サーバーとの通信は非同期処理で行うため、fetch(もしくはaxios)を使う。
    // fetch(url, リクエストの内容)  fetchは「取りに行く」という意味。
    // .then(レスポンス=>{レスポンスを用いた処理})  fetchが成功するとthen,
    // .catch(エラー=>{エラーを用いた処理})  fetchが失敗するとcatchが呼び出される
    // fetch("/api/users")
    fetch("/api/users", {
      method: "GET",
      headers: {
        "Content-Type":"application/json; cherset=utf-8",
      }
    })
    // ↓レスポンスがjson形式なので、json形式を解読する。
    .then(res => res.json()) // res=>res.json()は、(res)=>{return res.json()}の省略記法。
    .then(res=>{
      // レスポンスが連想配列の形なので、こちらに処理を記述する。
      console.log(res.msg) //msgはkey
      setDetas(res.deta)
    })
    .catch(err=>console.error(err))
  }




    // データの送信
    // データのクライアント側からサーバー側に送る処理
    const handlePost = () => {
      // 同じようにfetchを使う。
      fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; cherset=utf-8",
        },
        // データを送る際にはリクエストのボディを使う。json形式で送る。
        body: JSON.stringify({
          name: "inoue"
        })
      }).then(res=>res.json())
      .then(res=> {
        console.log(res.msg)
      }).catch(err=>console.errer(err))
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
      {/* HTTPメソットの読み取り＝GET */}
      <button onClick={handleGet}>GET</button>
      {/* HTTPメソッド */}
      <button onClick={handlePost}>POST</button>

    </section>
  );

}

export default App
