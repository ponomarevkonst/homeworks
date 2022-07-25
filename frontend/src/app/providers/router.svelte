<script>
	import { history } from '@entities/viewer';
	import { SchoolCourseListPage } from '@pages/course-list';
	import { FileDetailPage } from '@pages/file-detail';
	import { FileListPage } from '@pages/file-list';
	import { CourseDetailPage } from '@pages/course-detail';
	import { HomeworkDetailPage } from '@pages/homework-detail';
	import { SchoolActionListPage } from '@pages/school-action-list';
	import { SchoolListPage } from '@pages/school-list';
	import { TaskDetailPage } from '@pages/task-detail';
	import { TaskListPage } from '@pages/task-list';
	import { Layout } from '@widgets/layout/ui';
	import { Link, Route, Router } from 'svelte-navigator';
	import { LabelsPage } from '@pages/labels';
</script>

<Router {history}>
	<Layout>
		<Route path="/*">
			<Route path="/">
				<SchoolListPage />
			</Route>
			<Route path=":schoolCode/*" let:params>
				<Route path="/">
					<SchoolActionListPage />
				</Route>
				<Route path="tasks/*">
					<Route path="/">
						<TaskListPage />
					</Route>
					<Route path=":taskId">
						<TaskDetailPage />
					</Route>
				</Route>
				<Route path="homework/*">
					<Route path=":homeworkId/*">
						<Route path="/">
							<HomeworkDetailPage />
						</Route>
					</Route>
				</Route>
				<Route path="labels">
					<LabelsPage />
				</Route>
				<Route path="files/*">
					<Route path="/">
						<FileListPage />
					</Route>
					<Route path=":fileId/*">
						<FileDetailPage />
					</Route>
				</Route>
				<Route path="courses/*">
					<Route path="/">
						<SchoolCourseListPage schoolCode={params.schoolCode} />
					</Route>
					<Route path=":courseSlug/*">
						<Route path="/">
							<CourseDetailPage />
						</Route>
					</Route>
				</Route>
			</Route>
		</Route>
	</Layout>
</Router>
