import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uses | Tools & Software',
  description: 'Software, tools, and hardware I use on a daily basis',
}

export default function UsesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Uses</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Development Tools</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="font-medium">CursorAI Code Editor</span>
            <span className="text-gray-500 dark:text-gray-400 ml-2">- My primary code editor (previously IntelliJ)</span>
          </li>
          <li className="flex items-start">
            <span className="font-medium">NeoVim</span>
            <span className="text-gray-500 dark:text-gray-400 ml-2">- For quick editing sessions</span>
          </li>
          <li className="flex items-start">
            <span className="font-medium">DataGrip</span>
            <span className="text-gray-500 dark:text-gray-400 ml-2">- Database management tool</span>
          </li>
          <li className="flex items-start">
            <span className="font-medium">Wezterm</span>
            <span className="text-gray-500 dark:text-gray-400 ml-2">- Terminal emulator</span>
          </li>
          <li className="flex items-start">
            <span className="font-medium">Victor Mono</span>
            <span className="text-gray-500 dark:text-gray-400 ml-2">- My preferred coding font across all applications</span>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Business Tools</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="font-medium">Kontist</span>
            <span className="text-gray-500 dark:text-gray-400 ml-2">- Business banking</span>
          </li>
          <li className="flex items-start">
            <span className="font-medium">Stripe</span>
            <span className="text-gray-500 dark:text-gray-400 ml-2">- Payment processing</span>
          </li>
          <li className="flex items-start">
            <span className="font-medium">WISO</span>
            <span className="text-gray-500 dark:text-gray-400 ml-2">- Tax management</span>
          </li>
          <li className="flex items-start">
            <span className="font-medium">Google Workspace</span>
            <span className="text-gray-500 dark:text-gray-400 ml-2">- Business productivity suite</span>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Planning & Management</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="font-medium">Apple Notes</span>
            <span className="text-gray-500 dark:text-gray-400 ml-2">- Note-taking and documentation</span>
          </li>
          <li className="flex items-start">
            <span className="font-medium">Apple Reminders</span>
            <span className="text-gray-500 dark:text-gray-400 ml-2">- Task management</span>
          </li>
          <li className="flex items-start">
            <span className="font-medium">Google Calendar & Cal.com</span>
            <span className="text-gray-500 dark:text-gray-400 ml-2">- Schedule management</span>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Hardware</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="font-medium">Apple MacBook Pro</span>
            <span className="text-gray-500 dark:text-gray-400 ml-2">- M2 Pro with 32GB RAM</span>
          </li>
        </ul>
      </section>
    </div>
  )
}
