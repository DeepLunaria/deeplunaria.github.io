const body = document.getElementsByTagName('body')[0]

const header = `
  <div id="mobile-menu-screen">
    <a class="mobile-link" href="/blog">Blog</a>
    <a class="mobile-link" href="/projects">Projects</a>
    <a class="mobile-link" href="/members">Members</a>
    <a class="mobile-link" href="/documents">Documents</a>
    <a class="mobile-link" href="https://github.com/DeepLunaria" target="_blank">Github</a>
    <a class="mobile-link" href="https://t.me/DeepLunaria" target="_blank">Telegram</a>
    <a class="mobile-link" href="https://discord.com/invite/kwEmpMExmv" target="_blank">Discord</a>
  </div>
  <nav-constructor>
    <a class="nav-item-first" href="/">DeepLunaria</a>
    <a class="nav-item" href="/blog">Blog</a>
    <a class="nav-item" href="/projects">Projects</a>
    <a class="nav-item" href="/members">Members</a>
    <a class="nav-item" href="/documents">Documents</a>
  </nav-constructor>
  <mobile-navbar>
    <a class="nav-item-first" href="/">DeepLunaria</a>
    <div id="mobile-menu-button">
      <menu-icon style="margin-left: 20px;"></menu-icon>
    </div>
  </mobile-navbar>
`

const footer = `
  <footer>
    <p style="margin: 0; font-weight: bold;">© ${new Date().getFullYear()} DeepLunaria Foundation.</p>
    <social-media-list>
      <a href="https://github.com/DeepLunaria" target="_blank"><github-icon></github-icon></a>
      <a href="https://t.me/DeepLunaria" target="_blank"><telegram-icon></telegram-icon></a>
      <a href="https://discord.com/invite/kwEmpMExmv" target="_blank"><discord-icon></discord-icon></a>
    </social-media-list>
  </footer>
`

const og_data = body.innerHTML

body.innerHTML = header + og_data + footer