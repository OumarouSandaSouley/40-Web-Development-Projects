import {forwardRef} from 'react'
const Page = forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      {props.children}
    </div>
  );
});

export default Page