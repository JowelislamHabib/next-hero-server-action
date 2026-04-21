"use client";
import { newTaskAction } from "@/lib/actions";
import {
  Button,
  Input,
  Label,
  ListBox,
  TextField,
  Select,
  Form,
  FieldError,
} from "@heroui/react";

import React from "react";

const NewTask = () => {
  return (
    <div className="container mx-auto">
      <h1>Add a new task</h1>
      <Form action={newTaskAction} className="flex flex-col gap-4">
        <TextField
          isRequired
          minLength={5}
          className="w-full"
          name="title"
          type="text"
          validate={(value) => {
            if (value.length < 5) {
              return "Title must be at least 5 characters";
            }
          }}
        >
          <Label>Title</Label>
          <Input placeholder="Enter your task title" />
          <FieldError />
        </TextField>
        <TextField className="w-full" name="description" type="text">
          <Label>Task Description</Label>
          <Input placeholder="Enter your Task Description" />
        </TextField>

        <Select name="priority" className="w-[256px]" placeholder="Select one">
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

        <Select name="status" className="w-[256px]" placeholder="Select one">
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
        <Button slot="close" variant="secondary">
          Cancel
        </Button>
        <Button slot="close" type="submit">
          Submit Task
        </Button>
      </Form>
    </div>
  );
};

export default NewTask;
