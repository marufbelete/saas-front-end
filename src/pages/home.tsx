import {useGetHomeQuery} from "../service/user_api"

function Home(){
  const {data,error,isLoading,isFetching,isSuccess,refetch}=useGetHomeQuery()
console.log(data)
    return(<>
  <div>This is home</div>
  <div>{data?.message}</div>
    </>)
}

export default Home