"use client";

import { Plus } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextField,
  Select,
} from "@heroui/react";

export function AddTasks({ createATask }) {
  return (
    <Modal>
      <Button variant="secondary">Add a task</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Plus className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Add your task</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={createATask} className="flex flex-col gap-4">
                  <TextField className="w-full" name="title" type="text">
                    <Label>Title</Label>
                    <Input placeholder="Enter your task title" />
                  </TextField>
                  <TextField className="w-full" name="description" type="text">
                    <Label>Task Description</Label>
                    <Input placeholder="Enter your Task Description" />
                  </TextField>

                  <Select
                    name="priority"
                    className="w-[256px]"
                    placeholder="Select one"
                  >
                    <Label>Priority</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="high" textValue="High">
                          High
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="medium" textValue="Medium">
                          Medium
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="low" textValue="Low">
                          Low
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  <Select
                    name="status"
                    className="w-[256px]"
                    placeholder="Select one"
                  >
                    <Label>Status</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="completed" textValue="Completed">
                          Completed
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="in-progress" textValue="In-progress">
                          In-progress
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="pending" textValue="Pending">
                          Pending
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  <TextField className="w-full" name="assignedTo">
                    <Label>Assigned To</Label>
                    <Input placeholder="Task Assigned To" />
                  </TextField>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button slot="close" type="submit">
                      Submit Task
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
