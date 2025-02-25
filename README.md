# Collector's Haven

**Collector's Haven** is a simple full-stack application (React + Node.js) that stores and displays items from a YAML file. You can use it to manage any type of collection—books, audio devices, vintage computers, antiques, etc.

## Features

- **Node.js + Express** backend
  - Parses a `items.yaml` file (our "database").
  - Serves a `/api/items` endpoint returning the item list as JSON.
  - Exposes static images in `public/images`.
- **React** frontend
  - Fetches items from the backend API.
  - Displays each item's main image and gallery images.
  - Simple, mobile-friendly UI (can be extended).
- **Docker** configuration
  - Dockerfiles for both backend and frontend for containerizing.
- **Kubernetes**-friendly
  - Once built and pushed to a container registry, you can deploy to K8s using your own manifests.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/collectors-haven.git
cd collectors-haven
