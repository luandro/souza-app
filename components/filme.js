import Link from 'next/link'

export default ({ capa, url, nome }) => <Link href="/video"><div className="filme">
  <a href="https://www.w3schools.com">
    <h2>{nome}</h2>
  </a>
  <style jsx>{`
    .filme {
      background:purple;
      background-image: url("${capa}");
      background-size: cover;
      height:300px;
      width:300px;
      margin:10px;
    }
    a {
      color: white;
      text-decoration: none;
    }
  `}</style>
</div></Link>