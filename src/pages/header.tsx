import {ActionList,Avatar} from '@primer/react'
import {AiFillAlert} from "react-icons/ai"
function Header(){
    return(<>
    <ActionList>
  <ActionList.Item>New file</ActionList.Item>
  <ActionList.Item>
    <ActionList.LeadingVisual>
      <Avatar src="https://github.com/mona.png" />
    </ActionList.LeadingVisual>
    mona
    <ActionList.Description>Monalisa Octocat</ActionList.Description>
  </ActionList.Item>
  <ActionList.Item>
        <ActionList.LeadingVisual>
          <AiFillAlert />
        </ActionList.LeadingVisual>
        Rename
      </ActionList.Item>
  <ActionList.Item>
    Copy link</ActionList.Item>
  <ActionList.Item draggable>Edit file</ActionList.Item>
  <ActionList.Divider />
  <ActionList.Item  variant="danger">Delete file</ActionList.Item>
</ActionList>
    </>)
}

export default Header