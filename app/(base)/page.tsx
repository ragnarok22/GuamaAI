import SideBar from '@/components/SideBar'
import PromptBar from '@/components/PromptBar'
import SamplePrompt from '@/components/SamplePrompt'
import Settings from '@/components/Settings'


export default function IndexPage() {
  return (
    <main className="min-h-screen flex">
      <SideBar/>
      <div className='w-full flex flex-col items-center justify-between p-4 sm:p-10'>
        <h2>guama - ai</h2>
        <div className='w-[60%]'>
          <h1 className="font-bold text-2xl sm:text-4xl text-purple-600 max-w-[450px]">
            Generate React or Vue components 
          </h1>
          <p className='mt-3 text-xs sm:text-base max-w-[450px]'>
            In a matter of seconds using your prompts, you can get
            your code snippets with a view of how those components
            could look like.
          </p>
          {/* <div className='flex items-center w-full mt-4'>
            <SamplePrompt />
          </div> */}
        </div>
        <PromptBar/>
      </div>
      <Settings/>
    </main>
  )
}
