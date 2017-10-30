import React from 'react'
import 'semantic-ui-css/semantic.min.css'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import centered from '@storybook/addon-centered'

import Provider from './provider'

import HomePage from '../pages/homePage'
import NoMatchPage from '../pages/noMatchPage'
import TodoListPage from '../pages/todoListPage'

import List from '../components/listComponent'
import Menu from '../components/menuComponent'
import TextBox from '../components/textBoxComponent'

storiesOf('Pages', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('Home', () => <HomePage />)
  .add('No Match', () => <NoMatchPage location={{ pathname: '/pathName' }} />)
  .add('Todo List', () => <TodoListPage />)

storiesOf('Components', module)
  .addDecorator(centered)
  .addDecorator(story => <Provider story={story()} />)
  .add('List', () => {
    const dataSource = [
      {
        date: '5/8/2016',
        id: 1,
        text: 'Todo from initial reducer state.',
        time: '12:02:12 PM'
      }
    ]
    return (
      <List
        dataSource={dataSource}
        editItem={action('Edit Item')}
        removeItem={action('Remove Item')}
    />
    )
  })
  .add('Menu', () => {
    const items = [
      {
        name: 'Home Page',
        isActive: true,
        onClick: action('Go to Home Page')
      }, {
        name: 'Todo List',
        isActive: false,
        onClick: action('Go to Todo List')
      }
    ]
    return (
      <Menu
        header='reactor'
        items={items}
      />
    )
  })
  .add('Text Box', () =>
    <TextBox
      formName='addTodo'
      onSubmit={action('Add Todo')}
      content={'ADD'}
    />
  )
