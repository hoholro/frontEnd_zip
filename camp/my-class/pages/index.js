import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
			<h1>로그인</h1>
			<label className={styles.label}>아이디</label>
			<input className={styles.input} type="text" />
			<label className={styles.label}>비밀번호</label>
			<input className={styles.input} type="password" />
		</div>

    <div>왜안보임..</div>
    </>
  )
}
