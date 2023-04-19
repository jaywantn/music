const navigation = () => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'mdi:home-outline'
    },
    {
      title: 'Student',
      path: '/student',
      icon: 'mdi:account-outline',
      children: [
        {
          title: 'List',
          path: '/student'
        },
        {
          title: 'Add',
          path: '/student/add'
        }
      ]
    },
    {
      title: 'Teacher',
      path: '/teacher',
      icon: 'mdi:account-outline',
      children: [
        {
          title: 'List',
          path: '/teacher'
        },
        {
          title: 'Add',
          path: '/teacher/add'
        }
      ]
    },
    {
      title: 'Course',
      path: '/course',
      icon: 'mdi:file-document-outline',
      children: [
        {
          title: 'List',
          path: '/course'
        },
        {
          title: 'Add',
          path: '/course/add'
        }
      ]
    }
  ]
}

export default navigation
