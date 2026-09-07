function Frame() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Light',sans-serif] font-light justify-center relative shrink-0 text-[#f8f9fa] text-[32px] whitespace-nowrap">
        <p className="leading-[55px] mb-0">Bounce</p>
        <p className="leading-[55px]">Rate</p>
      </div>
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center min-w-full relative shrink-0 text-[#0041c8] text-[40px] w-[min-content]">
        <p className="leading-[55px]">-24%</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Light',sans-serif] font-light justify-center relative shrink-0 text-[#f8f9fa] text-[32px] whitespace-nowrap">
        <p className="leading-[55px]">
          Abandono
          <br aria-hidden />
          de Carrinho
        </p>
      </div>
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center min-w-full relative shrink-0 text-[#0041c8] text-[40px] w-[min-content]">
        <p className="leading-[55px]">-21%</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Light',sans-serif] font-light justify-center relative shrink-0 text-[#f8f9fa] text-[32px] whitespace-nowrap">
        <p className="leading-[55px]">
          Nota no
          <br aria-hidden />
          RA
        </p>
      </div>
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center min-w-full relative shrink-0 text-[#0041c8] text-[40px] w-[min-content]">
        <p className="leading-[55px]">+1.2</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Light',sans-serif] font-light justify-center relative shrink-0 text-[#f8f9fa] text-[32px] whitespace-nowrap">
        <p className="leading-[55px]">
          Load Time
          <br aria-hidden />
          Google
        </p>
      </div>
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center min-w-full relative shrink-0 text-[#0041c8] text-[40px] w-[min-content]">
        <p className="leading-[55px]">-1.5s</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Light',sans-serif] font-light justify-center relative shrink-0 text-[#f8f9fa] text-[32px] whitespace-nowrap">
        <p className="leading-[55px]">
          Pesquisa de
          <br aria-hidden />
          Satisfação
        </p>
      </div>
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center min-w-full relative shrink-0 text-[#0041c8] text-[40px] w-[min-content]">
        <p className="leading-[55px]">4.7/5</p>
      </div>
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[0] relative size-full text-center">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}