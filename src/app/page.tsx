export default function Home() {
  return (
    <main className="flex flex-col items-center p-24 gap-2">
      <svg className="hidden" width="0" height="0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="crispify">
            <feComponentTransfer>
              <feFuncA type="discrete" tableValues="0 1" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>
      <h1 className="text-5xl font-bold text-yellow-300 text-center mb-8" style={{ filter: 'url(#crispify)' }}>upsided&apos;s website <img className="h-[1em] inline" src="/jamrock.gif" alt="Jamaican flag" /></h1>
      <div className="flex flex-row gap-1 mb-8">
        <a className="w-20" href="https://github.com/Upsidedly" target="_blank">
          <img src="/github.gif" alt="github" />
        </a>
        <a className="w-20" href="https://www.youtube.com/channel/UCDXeDbeq-Z6ngCASDZ5Dmzg" target="_blank">
          <img src="/ytbutton.gif" alt="youtube" />
        </a>
        <a className="w-20" href="https://twitter.com/upxided" target="_blank">
          <img src="/twitterbutton.gif" alt="twitter" />
        </a>
      </div>

      <img src="/saturn.gif" alt="saturn" />
    </main>
  );
}
