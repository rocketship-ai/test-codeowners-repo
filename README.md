# Test CODEOWNERS Repository

This is a test repository demonstrating the use of GitHub's CODEOWNERS file for automatic code review assignments.

## Project Structure

```
test-codeowners-repo/
├── frontend/              # Frontend application code
│   ├── src/              # Source files
│   ├── tests/            # Unit tests
│   └── rocketship.yaml   # Frontend test suite
├── backend/              # Backend application code
│   ├── api/              # API endpoints
│   ├── internal/         # Internal packages
│   └── tests/            # Backend tests
│       └── rocketship.yaml
├── infrastructure/       # Infrastructure configuration
│   ├── docker/          # Docker configurations
│   ├── k8s/             # Kubernetes manifests
│   └── terraform/       # Terraform modules
├── docs/                # Documentation
│   ├── api/             # API documentation
│   └── user-guide/      # User guides
├── tests/               # Cross-cutting tests
│   ├── e2e/             # End-to-end tests
│   │   └── rocketship.yaml
│   ├── integration/     # Integration tests
│   └── performance/     # Performance tests
├── .github/             # GitHub configuration
│   └── workflows/       # GitHub Actions workflows
├── security/            # Security policies
│   └── policies/        # Security policy documents
├── shared/              # Shared components
│   ├── components/      # Reusable components
│   └── utils/           # Utility functions
├── CODEOWNERS           # Code ownership definitions
├── package.json         # Node.js dependencies
├── go.mod              # Go module definition
└── README.md           # This file
```

## CODEOWNERS File

The CODEOWNERS file in this repository defines automatic review assignments based on file patterns and directory ownership. Key features:

### Team Assignments

- **@rocketship-ai/frontend-team**: Owns all frontend code and JavaScript/TypeScript files
- **@rocketship-ai/backend-team**: Owns backend code and Go files (default owners)
- **@rocketship-ai/devops-team**: Owns infrastructure and CI/CD configurations
- **@rocketship-ai/security-team**: Owns security-related code and policies
- **@rocketship-ai/docs-team**: Owns documentation files
- **@rocketship-ai/qa-team**: Co-owns testing directories

### Special Rules

1. **Default Ownership**: Backend team owns everything unless explicitly specified
2. **Multiple Owners**: Some paths have multiple team owners for collaborative review
3. **Security Override**: Critical auth paths require security team review
4. **File Pattern Matching**: Uses glob patterns for flexible ownership rules

## Testing with Rocketship

This repository includes Rocketship test suites in:
- `frontend/rocketship.yaml` - Frontend-specific tests
- `backend/tests/rocketship.yaml` - Backend API tests
- `tests/e2e/rocketship.yaml` - End-to-end integration tests

Run tests using:
```bash
rocketship run -f frontend/rocketship.yaml
rocketship run -f backend/tests/rocketship.yaml
rocketship run -f tests/e2e/rocketship.yaml
```

## Development

### Frontend Development
```bash
npm install
npm run dev
```

### Backend Development
```bash
go mod download
go run ./cmd/api
```

## Contributing

When contributing to this repository, the CODEOWNERS file will automatically assign the appropriate reviewers based on the files you modify. This ensures that the right experts review your changes.

## License

MIT License - See LICENSE file for details