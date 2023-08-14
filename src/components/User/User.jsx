import { useSelector } from "react-redux";
import { selectUserById } from "../../store/user/selectors";
import { useCallback, useEffect, useRef } from "react";

export const User = ({ userId, className }) => {
  // const ref = useRef();
  // const timeoutRef = useRef();
  const user = useSelector((state) => selectUserById(state, { userId }));

  // useEffect(() => {
  //   console.log(ref);
  //   const customeFuntion = () => {};
  //
  //   timeoutRef.current = setTimeout(() => {}, 10000);
  //
  //   if (ref.current) {
  //     ref.current.addEventListener("", customeFuntion);
  //
  //     return () => ref.current.removeEventListener("", customeFuntion);
  //   }
  // }, []);

  // const refCallback = useCallback((element) => {
  //   console.log(element);
  // }, []);

  if (!user) {
    return null;
  }

  return (
    <>
      {/*<button onClick={() => clearTimeout(timeoutRef.current)}/>*/}
      {/*<span ref={ref} className={className}>*/}
      {/*  {user.name}*/}
      {/*</span>*/}
      {/*<span ref={refCallback} className={className}>*/}
      {/*  {user.name}*/}
      {/*</span>*/}
      <span className={className}>{user.name}</span>
    </>
  );
};
