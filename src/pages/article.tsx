
import Menu from "@/components/Menu"

export default function article() {
  return (
    <div>
      <Menu/>
      <div className="flex min-h-screen flex-col items-center justify-between p-24" style={{ fontFamily: 'Prompt' }}>
        <div className="">
            <p>บทความของเราจ้า</p>
        </div>
      </div>
    </div>
  )
}