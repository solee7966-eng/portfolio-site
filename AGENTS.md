<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Overview

This project is a developer portfolio site built with:
- Next.js App Router
- TypeScript
- Tailwind CSS

The portfolio showcases:
- JobFinder project
- Shopping Mall project
- MCP multi-agent collaboration workflow

# Multi-Agent Workflow

## ChatGPT
Responsible for:
- architecture design
- project planning
- code review
- prompt engineering

## Cursor AI
Responsible for:
- code generation
- UI implementation
- component scaffolding

## User
Responsible for:
- execution
- testing
- GitHub management
- deployment
- final technical decisions

# Development Principles

- Keep components reusable
- Keep folder structure clean
- Prefer scalable architecture
- Avoid unnecessary complexity
- Run lint/build before commit

# Folder Rules

- layout → components/layout
- sections → components/sections
- reusable ui → components/ui
- data → data
- assets → public